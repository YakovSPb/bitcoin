from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    CMC_APY_KEY: str
    
    modal_config = SettingsConfigDict(env_file =".env")
    
settings = Settings()