from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

user_credentials = {
    "kai": "K7d",
    "kevin": "K4s",
    "taylor": "T6h",
    "doug": "D9g",
    "athena": "A3j",
    "sherri": "S5a",
    "lynda": "L1s",
    "liam": "L2c",
    "printer": 'password'
}


current_orders = []

def process_items(item_name, item_price, item_mods):
    processed_string = f'{item_name} : ${item_price}\n'

    for mod in item_mods:
        processed_string += f' - {mod}\n'

    return processed_string


def get_order_items(data):
    user_id = data["id"]
    table_number = data["tableNumber"]
    item_name = data["name"]
    item_price = data["price"]
    item_mods = data["mods"]

    processed_string = process_items(item_name, item_price, item_mods)
    return processed_string, user_id, table_number


def finalize_order(user_id, table_number, orders):
    if table_number == 0:
        formatted_order = f'ARGO \nServer ID: {user_id} \n TOGO Order\n\n'
    elif table_number > 10:
        formatted_order = f'ARGO \nServer ID: {user_id} \n Bar: {table_number - 9}\n\n'
    else:
        formatted_order = f'ARGO \nServer ID: {user_id} \nTable Number: {table_number}\n\n'
    
    for i, item in enumerate(orders, start=1):
        formatted_order += f'{item}\n'

    return formatted_order


@app.route("/clear-orders")
def clear_order():
    global current_orders
    current_orders = []
    return jsonify(current_orders), 201


@app.route("/get-orders")
def get_order():
    return jsonify(current_orders), 201


@app.route("/send-orders", methods=["POST"])
def process_order():
    user_id = ""
    table_number = ""
    orders = []
    data = request.get_json()

    for item in data['order']:
        processed_string, user_id, table_number = get_order_items(item)

        user_id = user_id
        table_number = table_number
        orders.append(processed_string)

    formatted_order = finalize_order(user_id, table_number, orders)
    current_orders.append(formatted_order)
    print(current_orders)

    return jsonify(data), 201


@app.route('/send-login', methods=["POST"])
def handle_login():
    data = request.get_json()
    if data["userData"]["userId"] in user_credentials and data["userData"]["password"] == user_credentials[data["userData"]["userId"]]:
        if data["userData"]["userId"] == "printer":
            return jsonify("print"), 201
        else:
          return jsonify("serve"), 201       
    else:
        return jsonify(data), 401
    

if __name__ == "__main__":
    app.run(debug=True)