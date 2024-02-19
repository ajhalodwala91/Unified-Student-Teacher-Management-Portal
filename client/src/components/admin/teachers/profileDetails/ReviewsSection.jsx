import React from "react";

function ReviewsSection() {
  const reviews = [
    {
      id: 0,
      reviewImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM-NnmMcc-FuLU-tQ5CNSIYyY8fIcwRZT_nxnpg1Mt3tP3XN8vZUm3RuKRZXzIH2Fm0w0&usqp=CAU",
      reviewBy: "John Doe",
      parentOf: "P/O Beta Doe",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id at inventore illum laborum cum hic tenetur harum omnis veniam quas. Lorem, ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: 1,
      reviewImg:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
      reviewBy: "Rachel Green",
      parentOf: "P/O Beta Green",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id at inventore illum laborum cum harum omnis veniam quas. Lorem ipsum dolor sit amet.",
    },
    {
      id: 2,
      reviewImg:
        "https://i0.wp.com/www.davd.photo/wp-content/uploads/2015/07/business-headshot-downtown.jpg?ssl=1",
      reviewBy: "Chandler Bing",
      parentOf: "P/O Beta Bing",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id at inventore illum laborum cum hic tenetur harum omnis veniam quas.",
    },
    {
      id: 3,
      reviewImg:
        "https://pdaphotography.com/wp-content/uploads/2018/07/PD4_8636-Edit-384x576.jpg",
      reviewBy: "Monica Geller",
      parentOf: "P/O Beta Geller",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id at inventore illum laborum cum hic tenetur harum omnis veniam quas.",
    },
  ];

  return (
    <div className="reviewsSection">
      {reviews.map((elem) => {
        return (
          <div className="reviewCard" key={elem.id}>
            <img src={elem.reviewImg} className="reviewImg" />
            <div className="reviewBy">{elem.reviewBy}</div>
            <div className="parentOf">{elem.parentOf}</div>
            <div className="review">{elem.review}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ReviewsSection;
