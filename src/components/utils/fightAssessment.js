export const fightAssessment = (subOne, subTwo) => {
  let subOneTotal = 0
  let subTwoTotal = 0
  let results = {
    winner: null,
    totalScore: null,
    icon_img: null,
    public_description: null,
    subscribers: null,
    created: null,
  }
  const {
    created: created1,
    display_name: display_name1,
    icon_img: icon_img1,
    public_description: public_description1,
    subscribers: subscribers1,
  } = subOne
  const {
    created: created2,
    display_name: display_name2,
    icon_img: icon_img2,
    public_description: public_description2,
    subscribers: subscribers2,
  } = subTwo

  subOneTotal = Math.round(subscribers1 / 100 + created1 / 1000000)
  subTwoTotal = Math.round(subscribers2 / 100 + created2 / 1000000)

  subOneTotal > subTwoTotal
    ? (results = {
        winner: display_name1,
        totalScore: subOneTotal,
        icon_img: icon_img1,
        public_description: public_description1,
        subscribers: subscribers1,
        created: created1,
      })
    : (results = {
        winner: display_name2,
        totalScore: subTwoTotal,
        icon_img: icon_img2,
        public_description: public_description2,
        subscribers: subscribers2,
        created: created2,
      })

  return results
}
