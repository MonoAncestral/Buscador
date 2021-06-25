export class HttpRequest {
  public async Get<T>(request: string): Promise<T> {
    const headers = {
      method: 'GET',
    };
    const response = await fetch(request, headers);
    const data = await response.json();
    return data;
  }
}
