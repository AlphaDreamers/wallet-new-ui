import * as React from 'react';
import Animated, { FadeIn } from 'react-native-reanimated';
import { Button } from '~/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { Text } from '~/components/ui/text';
import { MoreVertical } from 'lucide-react-native';

type MenuItem = {
    label: string;
    shortcut?: string;
    disabled?: boolean;
    onPress?: () => void;
    subItems?: MenuItem[];
};

const menuItems: MenuItem[] = [
    {
        label: 'Account',
        onPress: () => console.log('Team pressed'),
    },

    {
        label: 'Logout',
        onPress: () => console.log('GitHub pressed'),
    },
];

function MetaliDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className="px-2 rounded-full bg-gradient-to-b
                    from-gray-700
                     to-gray-900 border
                     border-gray-600 shadow-sm shadow-gray-500/20"
                >
                    <MoreVertical size={20} color="#E5E7EB" className="opacity-90" />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                className="w-64 native:w-72 rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 shadow-xl shadow-gray-900/50"
            >
                <DropdownMenuLabel className="text-gray-300 px-4 py-2">
                    <Text className="font-medium">My Account</Text>
                </DropdownMenuLabel>

                <DropdownMenuSeparator className="bg-gray-700 h-[1px]" />

                <DropdownMenuGroup>
                    {menuItems.map((item, index) => {
                        if (item.subItems?.length) {
                            return (
                                <DropdownMenuSub key={index}>
                                    <DropdownMenuSubTrigger className="data-[state=open]:bg-gray-700/50 rounded-lg mx-2">
                                        <Text className="text-gray-200">{item.label}</Text>
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuSubContent
                                        className="rounded-lg bg-gray-800 border border-gray-700 shadow-lg"
                                    >
                                        <Animated.View entering={FadeIn.duration(150)}>
                                            {item.subItems.map((subItem, subIndex) => (
                                                <DropdownMenuItem
                                                    key={subIndex}
                                                    className="active:bg-gray-700/30 focus:bg-gray-700/30 rounded-lg mx-1"
                                                    onPress={subItem.onPress}
                                                    disabled={subItem.disabled}
                                                >
                                                    <Text className="text-gray-200">{subItem.label}</Text>
                                                    {subItem.shortcut && (
                                                        <DropdownMenuShortcut className="text-gray-400">
                                                            {subItem.shortcut}
                                                        </DropdownMenuShortcut>
                                                    )}
                                                </DropdownMenuItem>
                                            ))}
                                        </Animated.View>
                                    </DropdownMenuSubContent>
                                </DropdownMenuSub>
                            );
                        }
                        return (
                            <DropdownMenuItem
                                key={index}
                                className="active:bg-gray-700/30 focus:bg-gray-700/30 rounded-lg mx-2"
                                onPress={item.onPress}
                                disabled={item.disabled}
                            >
                                <Text className="text-gray-200 font-extrabold">{item.label}</Text>
                                {item.shortcut && (
                                    <DropdownMenuShortcut className="text-gray-400">
                                        {item.shortcut}
                                    </DropdownMenuShortcut>
                                )}
                            </DropdownMenuItem>
                        );
                    })}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default MetaliDropdown;