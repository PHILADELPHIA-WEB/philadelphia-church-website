const declarationOfFaith = `We believe in God the Father Almighty, the Creator of heaven and earth.
We believe in Jesus Christ, His only Son, our Lord conceived by the Holy Spirit,
born of the Virgin Mary, who suffered for us under Pontius Pilate,
was crucified, died, and was buried, and descended to the place of the departed.
On the third day He rose again in victory, ascended into heaven,
and now reigns at the right hand of God the Father Almighty.
He will return to judge the living and the dead.
We believe in the Holy Spirit, the holy universal church, the fellowship of believers,
the forgiveness of sins, the resurrection of the body, and everlasting life in Christ. Amen.`;

const articles = [
  `We believe there is but one living and true God, everlasting, of infinite power, wisdom and goodness; Maker and Preserver of all things, both visible and invisible. And in the unity of this Godhead, there are three Persons of one substance of eternal being, and equal in holiness, justice, wisdom, power, and dignity; the Father, the Son, and the Holy Ghost.`,
  `We believe that the Son, who is the Word of the Father, the very and eternal God, of one substance with the Father, took man's nature in the womb of the blessed virgin; so that two whole and perfect natures, that is to say, the Godhead and the manhood were joined together in one Person, never to be divided, whereof is one Christ, very God and perfect man, who actually suffered, was crucified, dead, and buried, to reconcile the Father to us, and to make atonement, not only for our actual guilt, but also for original sin.`,
  `We believe that Christ did truly rise again from the dead, and took again His body, with all things appertaining to the perfections of man's nature, and ascended into heaven and there sits until He shall return to judge all men at the last day.`,
  `We believe the Holy Ghost, proceeding from the Father and the Son, is of one substance, majesty and glory with the Father and the Son, very and eternal God.`,
  `We believe in the verbal and plenary inspiration of the Holy Scriptures, known as the Bible, composed of sixty-six books and divided into two departments, Old and New Testaments. We believe the Bible is the Word of God, the full and complete revelation of the plan and history of redemption.`,
  `We believe that eternal life with God in heaven is a portion of the reward of the finally righteous; and that everlasting banishment from the presence of the Lord and unending torture in hell are the wages of the persistently wicked (Matthew 25:46; Psalm 9:17; Revelation 21:7, 8).`,
  `We believe that Jesus Christ shed His blood for the remission of sins that are past, for the regeneration of penitent sinners, and for salvation from sin and from sinning (Romans 3:25; 1 John 3:5-10; Ephesians 2:1-10).`,
  `We believe, teach and firmly maintain the scriptural doctrine of justification by faith alone (Romans 5:1).`,
  `We believe that Jesus Christ shed His blood for the complete cleansing of the justified believer from all indwelling sin and from its pollution, subsequent to regeneration (1 John 1:7-9).`,
  `We believe in sanctification. While sanctification is initiated in regeneration and consummated in glorification, we believe it includes a definite, instantaneous work of grace achieved by faith subsequent to regeneration (Acts 26:18; 1 John 1:9). Sanctification delivers from the power and dominion of sin. It is followed by lifelong growth in grace and knowledge of our Lord and Savior Jesus Christ (2 Corinthians 4:16; 2 Peter 3:18).`,
  `We believe that the Pentecostal baptism of the Holy Ghost and fire is obtainable by a definite act of appropriating faith on the part of the fully cleansed believer, and the initial evidence of the reception of this experience is speaking with other tongues as the Spirit gives utterance (Luke 11:13; Acts 1:5; 2:1-4; 8:17; 10:44-46; 19:6).`,
  `We believe in divine healing as in the atonement (Isaiah 53:4, 5; Matthew 8:16, 17; Mark 16:14-18; James 5:14-16; Exodus 15:26).`,
  `We believe in the imminent, personal, premillennial second coming of our Lord Jesus Christ (1 Thessalonians 4:15-17; Titus 2:13; 2 Peter 3:10-14; Matthew 24:29-44), and love and wait for His appearing (2 Timothy 4:8).`,
  `We believe it is the responsibility of every believer to dedicate his life to carrying out the work of the Great Commission (Matthew 28:18-20; Mark 16:15-20; Acts 1:8).`,
];

export default function ArticlesOfFaith() {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">Philadelphia Declaration</h1>
          <p className="text-lg md:text-2xl text-gray-100 mb-12">What we believe, as revealed in God's Word</p>

          <div className="max-w-3xl mx-auto">
            <p className="text-gray-100 italic whitespace-pre-line">{declarationOfFaith}</p>
          </div>
        </div>
      </section>

      <section className="section-container bg-surface">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="section-title">Articles of Faith</h2>
          {articles.map((text, index) => (
            <div key={index} className="flex gap-4">
              <span className="font-serif font-bold text-2xl text-primary-600 flex-shrink-0">
                {index + 1}.
              </span>
              <p className="text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
