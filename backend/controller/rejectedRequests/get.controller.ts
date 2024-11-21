import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { RejectedRequest } from "../../entity/RejectedRequests.entity";

export async function fetchRejectedRequests(request: Request, response: Response) {
    const reference = request.params.reference;

    const rejectedRequestsRepository = AppDataSource.getRepository(RejectedRequest);

    const rejectedRequests = await rejectedRequestsRepository.find({ where: { reference } });

    return response.status(200).json({ rejectedRequests }); 

}