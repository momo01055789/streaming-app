"use server";

import { revalidatePath } from "next/cache";

import { followUser, unfollowUser } from "@/lib/follow-service";

export const onFollow = async (id: string) => {
  try {
    const followedUser = await followUser(id);
    revalidatePath("/");

    if (followedUser) {
      revalidatePath(`/${followedUser.following.username}`);
    }
    return followedUser;
  } catch (error) {
    throw new Error("Interal Error");
  }
};

export const onUnfollow = async (id: string) => {
  try {
    const unFollowedUser = await unfollowUser(id);
    revalidatePath("/");
    if (unFollowedUser) {
      revalidatePath(`/${unFollowedUser.following.username}`);
    }
    return unFollowedUser;
  } catch (error) {
    throw new Error("Internal Error");
  }
};
