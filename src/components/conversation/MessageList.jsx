import React from 'react';

import { ScrollArea } from "../ui/scroll-area";

import { RiMenu2Line } from "react-icons/ri";
import { IoReload } from "react-icons/io5";

const MessageList = () => {
    return (
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
    )
}

export default MessageList