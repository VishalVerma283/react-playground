const Shimmer = () => {
    return (
        <div className="body">
            <div className="card-filters">
                {/* Search */}
                <div className="shimmer-search"></div>

                {/* Filter button skeleton */}
                <div className="filter">
                    <div className="shimmer-filter-btn"></div>
                    <div className="shimmer-filter-btn"></div>
                    <div className="shimmer-filter-btn"></div>
                </div>
            </div>

            {/* Restaurant Cards */}
            <div className="restaurant-container">
            {Array.from({ length: 8 }).map((_, index) => (
                <div className="restaurant-card shimmer-card" key={index}>
                    <div className="shimmer-img"></div>

                    <div className="card-content">
                        <div className="shimmer-line shimmer-title"></div>
                        <div className="shimmer-line shimmer-cuisines"></div>

                        <div className="card-info">
                            <div className="shimmer-line shimmer-rating"></div>
                            <div className="shimmer-line shimmer-delivery"></div>
                        </div>

                        <div className="restaurant-price">
                            <div className="shimmer-line shimmer-price-label"></div>
                            <div className="shimmer-line shimmer-price"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Shimmer;