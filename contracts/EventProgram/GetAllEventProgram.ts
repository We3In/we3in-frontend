interfacemport ResponseDto from "../../../commons/Response/ResponseDto";
import DietProgramDto from "../../Dtos/DietProgramDto";

export default interface GetAllDietProgramResponse{
    responseDto: ResponseDto<DietProgramDto []>;
}