import React from "react";

import { AvatarImage, AvatarFallback, Avatar } from "../components/ui/avatar";
import { ScrollArea } from "../components/ui/scroll-area";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { HiInbox } from "react-icons/hi2";
import { SiRedux } from "react-icons/si";
import { MdPeopleAlt } from "react-icons/md";
import { IoBarChartSharp } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import { IoReload } from "react-icons/io5";
import { LiaPhoneAltSolid } from "react-icons/lia";
import { IoMdContact } from "react-icons/io";

const Conversation = () => {
    return (
        <div className="flex h-screen bg-gray-100 font-[roboto]">
            <nav className="flex flex-col bg-[#1E4D91] w-20 border-r">
                <div className="w-full bg-transparent p-4 cursor-pointer hover:opacity-[0.8] opacity-1">
                    <SiRedux className="mx-auto h-6 w-6 text-white" />
                </div>
                <div className="w-full bg-white p-4 cursor-pointer">
                    <HiInbox className="mx-auto h-6 w-6 text-[#1E4D91]" />
                </div>
                <div className="w-full bg-transparent p-4 cursor-pointer hover:opacity-[0.8] opacity-1">
                    <MdPeopleAlt className="mx-auto h-6 w-6 text-white" />
                </div>
                <div className="w-full bg-transparent p-4 cursor-pointer hover:opacity-[0.8] opacity-1">
                    <IoBarChartSharp className="mx-auto h-6 w-6 text-white" />
                </div>
            </nav>
            <aside className="w-1/4 bg-white border-r">
                <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center justify-center gap-4">
                        <RiMenu2Line className="h-6 w-6 cursor-pointer" />
                        <h1 className="font-semibold text-xl tracking-wide">
                            Conversations
                        </h1>
                    </div>
                    <IoReload className="h-6 w-6 cursor-pointer" />
                </div>
                <ScrollArea>
                    <div className="flex flex-col gap-3 items-start bg-gray-100 px-6 py-4 tracking-wide cursor-pointer border-b">
                        <div className="flex justify-between items-start gap-3 w-full">
                            <div className="flex justify-between items-center gap-3">
                                <input type="checkbox" />
                                <div className="flex flex-col justify-center items-start">
                                    <div className="text-sm font-semibold">Amit RG</div>
                                    <div className="text-xs text-gray-500 font-semibold">
                                        Facebook DM
                                    </div>
                                </div>
                            </div>
                            <div className="text-xs text-gray-500 font-semibold">10m</div>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-1">
                            <div className="text-xs font-semibold w-full tracking-wider">
                                Awesome Product
                            </div>
                            <div className="text-xs text-gray-500">
                                Hey There! I probably did one of the bes...
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 items-start bg-whiter px-6 py-4 tracking-wide cursor-pointer border-b">
                        <div className="flex justify-between items-start gap-3 w-full">
                            <div className="flex justify-between items-center gap-3">
                                <input type="checkbox" />
                                <div className="flex flex-col justify-center items-start">
                                    <div className="text-sm font-semibold">Amit RG</div>
                                    <div className="text-xs text-gray-500 font-semibold">
                                        Facebook DM
                                    </div>
                                </div>
                            </div>
                            <div className="text-xs text-gray-500 font-semibold">10m</div>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-1">
                            <div className="text-xs font-semibold w-full tracking-wider">
                                Awesome Product
                            </div>
                            <div className="text-xs text-gray-500">
                                Hey There! I probably did one of the bes...
                            </div>
                        </div>
                    </div>
                </ScrollArea>
            </aside>
            <main className="w-2/4 bg-white border-r">
                <div className="flex flex-col w-full h-screen bg-gray-100">
                    <div className="flex items-center justify-between p-4 border-b bg-white">
                        <div className="text-lg font-semibold tracking-wide">Amit RG</div>
                    </div>
                    <ScrollArea className="p-4 h-[51.5rem]">
                        <div className="flex flex-col gap-4 h-full w-full">
                            <div className="flex items-start justify-start space-x-2">
                                <Avatar className="border">
                                    <AvatarImage
                                        alt="Amit RG"
                                        src="/placeholder.svg?height=40&width=40"
                                    />
                                    <AvatarFallback>AR</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col gap-2">
                                    <div className="text-sm bg-white shadow-sm p-2 rounded-md">
                                        Is it in stock right now?
                                    </div>
                                    <div className="text-xs text-gray-500 font-semibold tracking-wide">
                                        Amit RG - Mar 05, 2:22 AM
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start justify-start space-x-2">
                                <Avatar className="border">
                                    <AvatarImage
                                        alt="Amit RG"
                                        src="/placeholder.svg?height=40&width=40"
                                    />
                                    <AvatarFallback>AR</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col gap-2">
                                    <div className="text-sm bg-white shadow-sm p-2 rounded-md">
                                        Is it in stock right now?
                                    </div>
                                    <div className="text-xs text-gray-500 font-semibold tracking-wide">
                                        Amit RG - Mar 05, 2:22 AM
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start justify-end space-x-2">
                                <div className="flex flex-col gap-2">
                                    <div className="text-sm bg-white shadow-sm p-2 rounded-md">
                                        Is it in stock right now?
                                    </div>
                                    <div className="text-xs text-gray-500 font-semibold tracking-wide">
                                        Amit RG - Mar 05, 2:22 AM
                                    </div>
                                </div>
                                <Avatar className="border">
                                    <AvatarImage
                                        alt="Amit RG"
                                        src="/placeholder.svg?height=40&width=40"
                                    />
                                    <AvatarFallback>AR</AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                    </ScrollArea>
                    <div className="p-4 bg-gray-100">
                        <Input placeholder="Message Amit RG" />
                    </div>
                </div>
            </main>
            <aside className="w-1/4 bg-gray-200">
                <div className="flex flex-col items-center px-4 py-8 border-b bg-white">
                    <Avatar className="h-16 w-16">
                        <AvatarImage
                            alt="Amit RG"
                            src="/placeholder.svg?height=80&width=80"
                        />
                        <AvatarFallback>AR</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-lg font-semibold mt-4">Amit RG</div>
                        <div className="flex justify-center items-center gap-1.5">
                            <div className="p-1 bg-gray-500 rounded-full"></div>
                            <div className="text-sm text-gray-500">Offline</div>
                        </div>
                    </div>
                    <div className="flex space-x-2 mt-4">
                        <Button variant="outline" className="gap-2 text-gray-700">
                            <LiaPhoneAltSolid className="h-5 w-5" />
                            <span>Call</span>
                        </Button>
                        <Button variant="outline" className="gap-2 text-gray-700">
                            <IoMdContact className="h-5 w-5" />
                            <span>Profile</span>
                        </Button>
                    </div>
                </div>
                <div className="m-4 p-6 bg-gray-100 rounded-lg bg-white shadow-md font-bold tracking-wide overflow-x-auto">
                    <h2 className="flex flex-col font-semibold text-lg">
                        Customer details
                    </h2>
                    <div className="flex justify-between items-center gap-1 flex-wrap mt-2">
                        <div className="text-sm text-gray-500">Email</div>
                        <div className="text-sm text-gray-700">amit@richpanel.com</div>
                    </div>
                    <div className="flex justify-between items-center gap-1 flex-wrap mt-2">
                        <div className="text-sm text-gray-500">First Name</div>
                        <div className="text-sm text-gray-700">Amit</div>
                    </div>
                    <div className="flex justify-between items-center gap-1 flex-wrap mt-2">
                        <div className="text-sm text-gray-500">Last Name</div>
                        <div className="text-sm text-gray-700">RG</div>
                    </div>
                    <div className="mt-4 text-[#1E4D91] cursor-pointer hover:underline">
                        View more details
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Conversation;
