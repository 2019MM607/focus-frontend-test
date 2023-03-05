interface TitleProps {
    title: string;
}
export const Title = ({ title }: TitleProps) => {
    return <h2 className="text-red text-2xl md:ml-10 ml-2 ">{title}</h2>;
};
