import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Subscription } from "../../entity/Subscription.entity";

export async function subscriptions(
  request: Request,
  response: Response
): Promise<void> {
  const { cin } = request.body;

  if (!cin) {
    response.status(402).send("unauthorized");
  } else {
    const subscriptionsRepository = AppDataSource.getRepository(Subscription);
    const subscriptions = await subscriptionsRepository.find({
      where: { cin },
    });

    response.status(200).json({ subscriptions });
  }
}
