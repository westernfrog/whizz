const Card = ({ imageSrc, title, description, tags }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
            <div className="rounded-l-lg overflow-hidden w-[100px] h-[150px] flex justify-center items-center m-4">
                <img className=" rounded-full" src={imageSrc} alt={title} />
            </div>
            <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{title}</h2>
                <p className="text-gray-700 text-base">{description}</p>
                <div className="mt-4">
                    {tags.map((tag) => (
                        <span key={tag} className="inline-block bg-lime-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
