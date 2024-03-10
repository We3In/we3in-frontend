import { AccessModify, ServerNames } from "@/services/HttpClientService";
import BaseService from "@/services/Models/BaseService";

export default interface EventProgramService extends BaseService {
async GetAllEventProgram(): Promise<GetAllEventProgramResponse>{
    const promiseData :GetAllEventProgramResponse = await this.httpClientServices.getAsync({
        accessModify: AccessModify.Private,
        action: "GetAllEventProgram",
        controller: "EventProgram",
        serverName: ServerNames.AppServer
});
return promiseData;
}
