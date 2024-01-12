


const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="my-8 md:w-3/12 mx-auto">
            <p className="text-yellow-600 text-center py-2 mb-1">--- {subHeading} ---</p>
            <h3 className="uppercase text-center font-semibold border-y-4 py-2 text-2xl">{heading}</h3>
        </div>
    );
};

export default SectionTitle;