import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Subscription } from "../../entity/Subscription.entity";

export async function deleteSubscription(request: Request, response: Response) {
  const reference = request.params.reference;

  const subscriptionRepository = AppDataSource.getRepository(Subscription);

  await subscriptionRepository.delete(reference);

  return response.status(200).json({ message: "subscription deleted" });
}
