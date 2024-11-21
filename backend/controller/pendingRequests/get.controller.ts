import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { PendingRequest } from "../../entity/PendingRequests.entity";

export async function getPendingRequests(request: Request, response: Response) {
  const reference = request.params.reference;

  const pendingRequestsRepository = AppDataSource.getRepository(PendingRequest);

  const pendingRequests = await pendingRequestsRepository.find({
    where: { reference },
  });

  console.log(pendingRequests);

  return response.status(200).json({ pendingRequests });
}
