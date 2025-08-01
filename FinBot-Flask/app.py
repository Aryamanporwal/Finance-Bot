from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/ingest', methods=['POST'])
def ingest():
    data = request.get_json()
    # Do ETL/data ingestion/ML stuff here...
    return jsonify({'message': 'Data ingested successfully!', 'received': data})

if __name__ == '__main__':
    app.run(port=5001, debug=True)  # Run on 5001 (to avoid port clash with Node)