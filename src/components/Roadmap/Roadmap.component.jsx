import React from "react";
import "./Roadmap.styles.css";

const Roadmap = () => {
  const milestones = [
    {
      title: "Waifu Genesis",
      description:
        "Launch the WAIINU token with a massive meme marketing campaign on social media, targeting waifu and meme enthusiasts.",
    },
    {
      title: "Meme Factory",
      description:
        "Develop a user-friendly meme generator where the community can create and share their waifu-themed memes and earn WAIINU tokens.",
    },
    {
      title: "Meme Leaderboard",
      description:
        "Implement a meme contest platform where users can submit their best waifu memes and vote on their favorites using WAIINU tokens. Winners receive token rewards.",
    },
    {
      title: "WAIINU Airdrop Madness",
      description:
        "Organize a series of airdrops and giveaways to spread WAIINU tokens among meme creators, influencers, and the community.",
    },
    {
      title: "Waifu Meme Invasion",
      description:
        "Launch a browser extension that replaces standard banner ads with waifu-themed memes and WAIINU token promotions.",
    },
    {
      title: "WAIINU Merch",
      description:
        "Create a line of meme-inspired merchandise featuring iconic waifu characters and inside jokes from the WAIINU community.",
    },
    {
      title: "MemeCasso Gallery",
      description:
        "Open a virtual gallery showcasing the most popular and creative waifu memes submitted by the community, with opportunities to purchase them as NFTs using WAIINU tokens.",
    },
    {
      title: "Waifu Meme Battles",
      description:
        "Host live meme battles on social media platforms, where contestants go head-to-head creating the funniest waifu memes in real-time.",
    },
    {
      title: "WAIINU Meme-athon",
      description:
        "Organize a 24-hour online event where participants from around the world come together to create waifu memes, compete in challenges, and win WAIINU tokens.",
    },
    {
      title: "Project Moon-Waifu",
      description:
        "Collaborate with a satellite company to send a waifu-themed meme featuring the WAIINU token into space, symbolizing the project's out-of-this-world ambitions.",
    },
  ];

  return (
    <div className="roadmap">
      <h2 className="roadmap-title">WAIINU Roadmap</h2>
      <div className="roadmap-content">
        {milestones.map((milestone, index) => (
          <div key={index} className="milestone">
            <h3 className="milestone-title">{milestone.title}</h3>
            <p className="milestone-description">{milestone.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
