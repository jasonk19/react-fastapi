# How to run

1. Install dependencies
    ```
    pip install -r requirements.txt
    ```
2. Create `.env` file following the `.env.example`
3. Run the app
    ```
    uvicorn src.main:app --reload
    ```

### Optional
1. Create virtual environment
    ```
    python -m venv {environment_name}
    ```
2. Do the steps above