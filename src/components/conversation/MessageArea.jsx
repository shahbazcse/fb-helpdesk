import React from 'react';

import { AvatarImage, AvatarFallback, Avatar } from "../ui/avatar";
import { ScrollArea } from "../ui/scroll-area";
import { Input } from "../ui/input";

const MessageArea = () => {
    return (
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
    )
}

export default MessageArea