from src.http_client import CMCHTTPClient
from src.config import settings


cmc_client = CMCHTTPClient(
    base_url="https://pro-api.coinmarketcap.com",
    api_key=settings.cmc_api_key
)

