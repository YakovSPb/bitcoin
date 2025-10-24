from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    cmc_api_key: str  # ← измените на это имя
    
    model_config = SettingsConfigDict(env_file=".env")
    
settings = Settings()