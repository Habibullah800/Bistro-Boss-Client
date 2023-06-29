
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div>
            <p className="text-yellow-600 text-center mt-12">--- {subHeading} ---</p>
            <h3 className=" text-3xl uppercase text-center border-y-4 w-[30%] mx-auto my-4 py-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;