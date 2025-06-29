import { BadgeCheck, CopyCheck, Plus, User } from "lucide-react";
import React from "react";

const ProfileCard = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#F5F5F5] font-inter gap-20">
      <div>
        <div className="bg-[#FAFAFA] h-[360px] w-56 rounded-[26px] flex flex-col p-1.5 shadow-2xl shadow-gray-300">
          <div className="bg-slate-400 w-full h-[260px] rounded-[22px]">
            <div className="relative w-full h-full rounded-[22px] overflow-hidden">
              <img
                src="profile-uncroped.jpg"
                alt="Profile"
                className="absolute w-full h-full object-cover scale-125"
                style={{ objectPosition: "50% 30%" }}
              />
            </div>
          </div>
          <div className="flex flex-col px-3 py-2">
            <h1 className="text-[18px] font-medium tracking-wide text-[#1F1F1F mb-1 mt-2 flex items-center gap-1">
              <span>Sophie Bennett</span>
              <BadgeCheck className="text-green-600 size-5" />
            </h1>
            <p className="text-[12px] leading-4 text-[#6E6E6E] ">
              Product Designer who focuses on simplicity and usability.
            </p>
            <div className="flex items-center justify-between text-[12px] font-medium mt-6">
              <div className="flex items-center gap-0.5">
                <User className=" text-[#6E6E6E] size-3 font-bold" />
                <span>312</span>
              </div>
              <div className="flex items-center gap-0.5">
                <CopyCheck className=" text-[#6E6E6E] size-3 font-bold" />
                <span>48</span>
              </div>

              <div>
                <button className="text-[12px] font-medium bg-[#EFEFEF] px-4 py-1.5 rounded-full shadow-inner shadow-slate-300 flex items-center gap-0.5 cursor-pointer hover:bg-[#E0E0E0] transition-colors duration-200">
                  <span>Follow</span>
                  <Plus className=" size-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* // Full size DP card - version 1*/}
      <div className="flex justify-center items-center">
        <div className="bg-[#FAFAFA] h-[360px] w-56 rounded-[26px] flex flex-col p-1.5 shadow-2xl shadow-gray-300 relative overflow-hidden">
          <div className="bg-slate-400 w-full h-full rounded-[22px]">
            <div className="relative w-full h-full rounded-[22px] overflow-hidden">
              <img
                src="profile.jpg"
                alt="Profile"
                className="absolute w-full h-full object-cover"
                style={{ objectPosition: "50% 30%" }}
              />

              <div
                className="absolute -bottom-2 left-0 right-0 bg-gradient-to-t from-white/50 via-white/40 to-transparent w-full h-[200px] backdrop-blur-sm"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, transparent 0%, black 20%, black 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, transparent 0%, black 20%, black 100%)",
                }}
              ></div>
            </div>
          </div>

          {/* Content overlay */}
          <div className="absolute bottom-3 left-0 right-0">
            <div className="flex flex-col px-6 py-2 rounded-b-[22px]">
              <h1 className="text-[18px] font-medium tracking-wide text-[#1F1F1F] mb-1 mt-2 flex items-center gap-1">
                <span>Sophie Bennett</span>
                <BadgeCheck className="text-green-600 size-5" />
              </h1>
              <p className="text-[12px] leading-4 text-[#6E6E6E]">
                Product Designer who focuses on simplicity and usability.
              </p>
              <div className="flex items-center justify-between text-[12px] font-medium mt-6">
                <div className="flex items-center gap-0.5">
                  <User className="text-[#6E6E6E] size-3 font-bold" />
                  <span>312</span>
                </div>
                <div className="flex items-center gap-0.5">
                  <CopyCheck className="text-[#6E6E6E] size-3 font-bold" />
                  <span>48</span>
                </div>
                <div>
                  <button className="text-[12px] font-medium bg-[#EFEFEF] px-4 py-1.5 rounded-full shadow-xl shadow-slate-300 flex items-center gap-0.5 cursor-pointer hover:bg-[#E0E0E0] transition-colors duration-200">
                    <span>Follow</span>
                    <Plus className="size-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* // Full size DP card - version 2*/}

      {/* <div>
        <div className="bg-[#FAFAFA] h-[360px] w-56 rounded-[26px] flex flex-col p-1.5 shadow-2xl shadow-gray-300 relative overflow-hidden mx-auto ">
          <div className="bg-slate-400 w-full h-full rounded-[22px]">
            <div className="relative w-full h-full rounded-[22px] overflow-hidden">
              <img
                src="profile.jpg"
                alt="Profile"
                className="absolute w-full h-full object-cover"
                style={{ objectPosition: "50% 30%" }}
              />

              <div
                className="absolute -bottom-2 left-0 right-0 bg-gradient-to-t from-slate-500/95 via-gray-400/80 to-gray-300 w-full h-[200px] backdrop-blur"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, transparent 0%, black 30%, black 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, transparent 0%, black 20%, black 100%)",
                }}
              ></div>
            </div>
          </div>

          <div className="absolute bottom-3 left-0 right-0">
            <div className="flex flex-col px-6 py-2 rounded-b-[22px]">
              <h1 className="text-[18px] font-medium tracking-wide text-[#F5F5F7] mb-1 mt-2 flex items-center gap-1">
                <span>Sophie Bennett</span>
                <BadgeCheck className="text-green-600 size-5" />
              </h1>
              <p className="text-[12px] leading-4 text-[#6E6E6E]">
                Product Designer who focuses on simplicity and usability.
              </p>
              <div className="flex items-center justify-between text-[12px] font-medium mt-6">
                <div className="flex items-center gap-0.5">
                  <User className="text-[#6E6E6E] size-3 font-bold" />
                  <span>312</span>
                </div>
                <div className="flex items-center gap-0.5">
                  <CopyCheck className="text-[#6E6E6E] size-3 font-bold" />
                  <span>48</span>
                </div>
                <div>
                  <button className="text-[12px] font-medium bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm flex items-center gap-0.5 cursor-pointer hover:bg-white/90 transition-all duration-200">
                    <span>Follow</span>
                    <Plus className="size-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProfileCard;
