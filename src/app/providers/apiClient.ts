import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

// Define your API base URL
const baseURL =
  `${process.env.NEXT_PUBLIC_BASE_URL}/api` ?? "http://localhost:3000/api";

class APIClient {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL,
      timeout: 10000, //default timeout
    });

    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
  }

  private handleResponse(response: AxiosResponse) {
    return response.data;
  }

  private handleError(error: AxiosError) {
    if (error.response) {
      console.error("Request failed with status:", error.response.status);
    } else if (error.request) {
      console.error("Request failed:", error.request);
    } else {
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  }

  public async get<T>(url: string): Promise<T> {
    try {
      const response = await this.instance.get<T>(url);
      return this.handleResponse(response);
    } catch (error) {
      return this.handleError(error as AxiosError);
    }
  }

  public async post<T>(url: string, data: any): Promise<T> {
    try {
      const response = await this.instance.post<T>(url, data);
      return this.handleResponse(response);
    } catch (error) {
      return this.handleError(error as AxiosError);
    }
  }
}

const apiClient = new APIClient();

export default apiClient;
