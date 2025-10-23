from aiohttp import ClientSession



class HTTPClient:
    def __init__(self,base_url: str, api_key: str):
        self.session = ClientSession(
            base_url = base_url,
            headers={
                'X-CMC_PRO_API_KEY': api_key,
            }
        )
    
    # https://sandbox-api.coinmarketcap.com/
    
class CMCHTTPClient(HTTPClient):
    async def get_listings(self):
        async with self._session.get('/v1/cryptocurrency/listings/latest') as resp:
            result = await resp.json()