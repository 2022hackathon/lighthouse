
1. Create a venv
```
python3 -m venv venv
```
2. Run the venv
```
source venv/bin/activate
```
3. Install the needed python packages
```
pip3 install -r requirements.txt
```
4. To close the venv
```
deactivate
```

#### Running the backend server

Reload makes the server automatically reload when changes are made to the src files  
Given with the optional port parameter (defaults to 8000)

1. Run the venv created earlier
```
source venv/bin/activate
```

```
python3 -m uvicorn app:app --reload
```
3. Open the browser to view the docs and interact with the server graphically
```
Go to localhost:port/docs in your browser
```