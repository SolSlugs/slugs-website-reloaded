import { Link, useNavigate } from 'react-router-dom';
import { Menu } from '@headlessui/react';

export interface HeaderLink {
    link: string;

    name: string;

    external?: boolean;
}

export interface HeaderDropdownProps {
    label: string;
    links: HeaderLink[];
}

export function HeaderDropdown(props: HeaderDropdownProps) {
    const {
        label,
        links,
    } = props;

    const navigate = useNavigate();

    function handleLink(link: string, external?: boolean) {
        if (external) {
            window.location.href = link;
        } else {
            navigate(link);
        }
    }

    return (
        <Menu as="div" className="relative">
            <Menu.Button className="flex justify-center items-center gap-x-2">
                {label}
                <span className="text-base">
                    ▼
                </span>
            </Menu.Button>
            <Menu.Items className="absolute flex flex-col justify-center items-center right-0 w-60 mt-2 origin-top-right bg-black border-2 border-slugGreen rounded z-10 divide-y divide-slugGreen">
                {links.map(({ link, name, external }) => (
                    <Menu.Item
                        as="div"
                        className="w-full flex justify-center items-center py-2 hover:bg-slugGreenDark cursor-pointer"
                        key={name}
                        onClick={() => handleLink(link, external)}
                    >
                        {() => external ? (
                                <a href={link} key={link}>
                                    <span className="text-3xl">
                                        {name}
                                    </span>
                                </a>
                            )
                            : (
                                <Link to={link} className="w-full flex justify-center items-center">
                                    <span className="text-3xl">
                                        {name}
                                    </span>
                                </Link>
                            )
                        }
                    </Menu.Item>
                ))}
            </Menu.Items>
        </Menu>
    )
}
