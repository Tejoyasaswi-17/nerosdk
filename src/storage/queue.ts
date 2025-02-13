import fastq from "fastq";
import type { queue } from "fastq";

import { replyWorker } from "../workers/replyWorker";
import { tweetWorker } from "../workers/tweetWorker";
import { hotProfilesWorker } from "../workers/hotProfilesWorker";
import { mentionsWorker } from "../workers/mentionsWorker";
import { tokenCreationWorker } from "../workers/tokenCreationWorker";
import { priorityReplyWorker } from "../workers/priorityReplyWorker";
import {
  IHotProfileBody,
  IMentionBody,
  IReplyBody,
  ITweetBody,
} from "../utils/interfaces";
import { NFTCreationWorker } from "../workers/nftCreationWorker";
import { tokenSwapWorker } from "../workers/swapTokenWorker";
import { SOLStakingWorker } from "../workers/solStakeWorker";
import { fetchTokenPriceWorker } from "../workers/fetchTokenPrice";
import { tokenAirdropWorker } from "../workers/tokenAirdropWorker";
import { tokenLendingWorker } from "../workers/tokenLendWorker";
import { TokenDeployWorker } from "../workers/deployToken";
import { githubWorker } from "../workers/githubWorker";

// create queue
export const replyqueue: queue<IReplyBody> = fastq.promise(replyWorker, 1);

export const priorityreplyqueue: queue<IReplyBody> = fastq.promise(
  priorityReplyWorker,
  1
);

export const twtqueue: queue<ITweetBody> = fastq.promise(tweetWorker, 1);

export const hotprofilesqueue: queue<IHotProfileBody> = fastq.promise(
  hotProfilesWorker,
  1
);

export const mentionsqueue: queue<IMentionBody> = fastq.promise(
  mentionsWorker,
  1
);

export const tokencreationqueue: queue<IMentionBody> = fastq.promise(
  tokenCreationWorker,
  1
);

export const deploytokenqueue: queue<IMentionBody> = fastq.promise(
  TokenDeployWorker,
  1
);

export const nftcreationqueue: queue<IMentionBody> = fastq.promise(
  NFTCreationWorker,
  1
);

export const tokenswapqueue: queue<IMentionBody> = fastq.promise(
  tokenSwapWorker,
  1
);

export const tokenlendqueue: queue<IMentionBody> = fastq.promise(
  tokenLendingWorker,
  1
);

export const solstakequeue: queue<IMentionBody> = fastq.promise(
  SOLStakingWorker,
  1
);

export const fetchtokenpricequeue: queue<IMentionBody> = fastq.promise(
  fetchTokenPriceWorker,
  1
);

export const tokenairdropqueue: queue<IMentionBody> = fastq.promise(
  tokenAirdropWorker,
  1
);

export const githubcreationqueue: queue<ITweetBody> = fastq.promise(
  githubWorker,
  1
);
