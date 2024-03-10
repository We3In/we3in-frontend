import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export class HttpClientService {
  // for example : https://localhost:7190/authserver/public/api/HealthChecks
  baseUrl: string = "https://localhost:7190";

  private url(requestParameters: Partial<RequestParameters>): string {
    return `${
      requestParameters.baseUrl ? requestParameters.baseUrl : this.baseUrl
    }/${
      requestParameters.serverName
        ? requestParameters.serverName
        : ServerNames.AppServer
    }/${
      requestParameters.accessModify
        ? requestParameters.accessModify
        : AccessModify.Private
    }api/${requestParameters.controller}${
      requestParameters.action ? `/${requestParameters.action}` : ""
    }`;
  }

  private getToken(config: AxiosRequestConfig) {
    // todo : can be convert local project
    const token = localStorage.getItem("accessToken");
    if (token) {
      config = config || {};
      config.headers = config.headers || {};
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  }

  async getAsync<T>(
    requestParameters: Partial<RequestParameters>,
    id?: string
  ): Promise<T> {
    let url: string = "";
    if (requestParameters.fullEndPoint) url = requestParameters.fullEndPoint;
    else
      url = `${this.url(requestParameters)}${id ? `/${id}` : ""}${
        requestParameters.queryString ? `?${requestParameters.queryString}` : ""
      }`;

    const response: AxiosResponse<T> = await axios.get<T>(
      url,
      this.getToken(requestParameters.headers)
    );

    return response.data;
  }

  async postAsync<T, R>(
    requestParameters: Partial<RequestParameters>,
    body: Partial<T>
  ): Promise<R> {
    let url: string = "";
    if (requestParameters.fullEndPoint) url = requestParameters.fullEndPoint;
    else
      url = `${this.url(requestParameters)}${
        requestParameters.queryString ? `?${requestParameters.queryString}` : ""
      }`;

    const response: AxiosResponse<R> = await axios.post<R>(
      url,
      body,
      this.getToken(requestParameters.headers)
    );

    return response.data;
  }

  async putAsync<T, R>(
    requestParameters: Partial<RequestParameters>,
    body: Partial<T>
  ): Promise<R> {
    let url: string = "";
    if (requestParameters.fullEndPoint) url = requestParameters.fullEndPoint;
    else
      url = `${this.url(requestParameters)}${
        requestParameters.queryString ? `?${requestParameters.queryString}` : ""
      }`;

    const response: AxiosResponse<R> = await axios.put<R>(
      url,
      body,
      this.getToken(requestParameters.headers)
    );

    return response.data;
  }

  async deleteAsync<T>(
    requestParameters: Partial<RequestParameters>,
    id: string
  ): Promise<T> {
    let url: string = "";
    if (requestParameters.fullEndPoint) url = requestParameters.fullEndPoint;
    else
      url = `${this.url(requestParameters)}/${id}${
        requestParameters.queryString ? `?${requestParameters.queryString}` : ""
      }`;

    const response: AxiosResponse<T> = await axios.delete<T>(
      url,
      this.getToken(requestParameters.headers)
    );

    return response.data;
  }
}

export class RequestParameters {
  serverName?: ServerNames;
  accessModify?: AccessModify;
  controller?: string;
  action?: string;
  queryString?: string;
  baseUrl?: string;
  headers?: any;
  fullEndPoint?: string;
}

const Customheaders = {
  "Content-Type": "application/json",
  Authorization: `Bearer myToken`,
};

export enum ServerNames {
  AuthServer = "authserver",
  FileServer = "fileserver",
  AppServer = "appserver",
  AiServer = "aiserver",
}

export enum AccessModify {
  Public = "public/",
  Private = "",
}