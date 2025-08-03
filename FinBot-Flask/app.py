from flask import Flask , request , make_response , render_template , Response , send_from_directory , jsonify
import pandas as pd
import os
import uuid

app = Flask(__name__  , template_folder = 'templates')

# @app.route('/ingest', methods=['POST'])
# def ingest():
#     data = request.get_json()
#     # Do ETL/data ingestion/ML stuff here...
#     return jsonify({'message': 'Data ingested successfully!', 'received': data})

# if __name__ == '__main__':
#     app.run(port=5001, debug=True)  # Run on 5001 (to avoid port clash with Node)

# @app.route('/' , method = ['GET' , 'POST'])
# def index():
#     myvalue = 'Aryaman'
#     myresult = 10+20
#     return render_template('index.html' , myvalue = myvalue , myresult = myresult)

# @app.route('/heyy')
# def hey():
#     response = make_response('Hey Aryaman')
#     response.status_code = 202
#     response.headers['content-type'] = 'application/json'
#     return response

# @app.route('/hello' , methods = ['GET' , 'POST'])
# def hello():
#     return "Hello Aryaman"

# @app.route('/greet/<name>')
# def greet(name):
#     if request.method == 'GET':
#         return "You made a GET Request"
#     elif request.method == 'POST':
#         return "You made a POST Request"
#     else : 
#         return f"Hello {name}"

# @app.route('/handle_url_params')
# def handle_url_params():
#     if 'greeting' in request.args.keys() and 'name' in request.args.keys():
#         greeting = request.args['greeting']
#         name = request.args.get('name')
#         return f'{greeting}, {name}'
#     else:
#         return 'Some Parameters are missing'

@app.route('/' , methods = ['GET' , 'POST'])
def index() : 
    if request.method == 'GET':
        return render_template('index.html')
    elif request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')

        if username == 'aryaman' and password == 'aryaman@20' : 
            return 'Success'
        else:
            return 'Failure'
        
@app.route('/file_upload' , methods = ['POST'])
def file_upload() :
    file = request.files['file']

    if file.content_type == 'text/plain':
        return file.read().decode()
    elif file.content_type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' or file.content_type == 'applicationvnd.ms-excel':
        df = pd.read_excel(file)
        return df.to_html()

@app.route('/convert_csv' , methods = ['POST'])
def convert_csv():
    file = request.files['file']

    df = pd.read_excel(file)

    response = Response(
        df.to_csv(),
        mimetype = 'text/csv',
        headers = {
            'Content-Disposition' : 'attachment; filename = result.csv'
        }
    )

    return response

@app.route('/convert_csv_two' , methods = ['POST'])
def convert_csv_two():
    file = request.files['file']

    df = pd.read_excel(file)

    if not os.path.exists('downloads'):
        os.makedirs('downloads')

    filename = f'{uuid.uuid4()}.csv'
    df.to_csv(os.path.join('downloads' , filename))
    return render_template('download.html' , filename = filename)


@app.route('/download')
def downlaod(filename):
    return send_from_directory('downloads' , filename , download_name = 'result.csv')

@app.route('/handle_post' , methods = ['POST'])
def handle_post():
    greeting = request.json['greeting']
    name = request.json['name']

    with open('file.txt' , 'w') as f:
        f.write(f'{greeting} , {name}')
    
    return jsonify({'message' : 'Successfully written'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port = 5000 , debug = True)

