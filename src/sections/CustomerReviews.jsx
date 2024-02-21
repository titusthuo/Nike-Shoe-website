import { ReviewCard } from "../components";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className='max-container py-16 bg-gradient-to-b from-gray-100 to-white'>
      <h2 className='font-montserrat text-center text-5xl font-extrabold text-primary mb-8'>
        Discover
        <span className='text-green-600'> Customer </span>
        Stories
      </h2>
      <p className='m-auto max-w-2xl text-center text-gray-700 leading-7'>
        Explore the inspiring tales shared by our delighted customers, describing their remarkable journeys with our products.
      </p>

      <div className='mt-16 flex flex-wrap justify-center items-center gap-8 lg:gap-14'>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
