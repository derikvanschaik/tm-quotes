const quotes = [
    {
      "q": "The only way to do great work is to love what you do.",
      "a": "Steve Jobs"
    },
    {
      "q": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      "a": "Winston Churchill"
    },
    {
      "q": "The best way to predict the future is to create it.",
      "a": "Peter Drucker"
    },
    {
      "q": "In the middle of difficulty lies opportunity.",
      "a": "Albert Einstein"
    },
    {
      "q": "Believe you can and you're halfway there.",
      "a": "Theodore Roosevelt"
    },
    {
      "q": "The future belongs to those who believe in the beauty of their dreams.",
      "a": "Eleanor Roosevelt"
    },
    {
      "q": "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
      "a": "Mark Zuckerberg"
    },
    {
      "q": "The only limit to our realization of tomorrow will be our doubts of today.",
      "a": "Franklin D. Roosevelt"
    },
    {
      "q": "You miss 100% of the shots you don't take.",
      "a": "Wayne Gretzky"
    },
    {
      "q": "Change your thoughts and you change your world.",
      "a": "Norman Vincent Peale"
    },
    {
      "q": "The secret of getting ahead is getting started.",
      "a": "Mark Twain"
    },
    {
      "q": "Don't watch the clock; do what it does. Keep going.",
      "a": "Sam Levenson"
    },
    {
      "q": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      "a": "Albert Schweitzer"
    },
    {
      "q": "The best revenge is massive success.",
      "a": "Frank Sinatra"
    },
    {
      "q": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
      "a": "Jordan Belfort"
    },
    {
      "q": "Success usually comes to those who are too busy to be looking for it.",
      "a": "Henry David Thoreau"
    },
    {
      "q": "Don't be afraid to give up the good to go for the great.",
      "a": "John D. Rockefeller"
    },
    {
      "q": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
      "a": "Christian D. Larson"
    },
    {
      "q": "Opportunities don't happen. You create them.",
      "a": "Chris Grosser"
    },
    {
      "q": "The only person you are destined to become is the person you decide to be.",
      "a": "Ralph Waldo Emerson"
    },
    {
      "q": "Your time is limited, don't waste it living someone else's life.",
      "a": "Steve Jobs"
    },
    {
      "q": "The future depends on what you do today.",
      "a": "Mahatma Gandhi"
    },
    {
      "q": "Dream big and dare to fail.",
      "a": "Norman Vaughan"
    },
    {
      "q": "The journey of a thousand miles begins with one step.",
      "a": "Lao Tzu"
    },
    {
      "q": "The best time to plant a tree was 20 years ago. The second best time is now.",
      "a": "Chinese Proverb"
    },
    {
      "q": "The only way to have a friend is to be one.",
      "a": "Ralph Waldo Emerson"
    },
    {
      "q": "A person who never made a mistake never tried anything new.",
      "a": "Albert Einstein"
    },
    {
      "q": "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
      "a": "Roy T. Bennett"
    },
    {
      "q": "Success is walking from failure to failure with no loss of enthusiasm.",
      "a": "Winston Churchill"
    },
    {
      "q": "Life is 10% what happens to us and 90% how we react to it.",
      "a": "Charles R. Swindoll"
    },
    {
      "q": "If you want to achieve greatness, stop asking for permission.",
      "a": "Anonymous"
    },
    {
      "q": "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
      "a": "David Brinkley"
    },
    {
      "q": "Don't be afraid to give up the good to go for the great.",
      "a": "John D. Rockefeller"
    },
    {
      "q": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
      "a": "Jordan Belfort"
    },
    {
      "q": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
      "a": "Christian D. Larson"
    },
    {
      "q": "Opportunities don't happen. You create them.",
      "a": "Chris Grosser"
    },
    {
      "q": "The only person you are destined to become is the person you decide to be.",
      "a": "Ralph Waldo Emerson"
    },
    {
      "q": "Your time is limited, don't waste it living someone else's life.",
      "a": "Steve Jobs"
    }
  ]
const bios = [
    {
      "a": "Steve Jobs",
      "b": "Steve Jobs (1955-2011) was an American business magnate, industrial designer, and inventor. He co-founded Apple Inc. and played a crucial role in revolutionizing the personal computer, smartphone, and music industries. Known for his visionary leadership and innovative thinking, Jobs became an icon of entrepreneurship and creativity. His relentless pursuit of excellence and emphasis on design aesthetics have left an indelible mark on the technology world."
    },
    {
      "a": "Winston Churchill",
      "b": "Sir Winston Churchill (1874-1965) was a British statesman, military leader, and writer. He served as the Prime Minister of the United Kingdom during World War II and played a significant role in shaping the course of history. Churchill's eloquence, determination, and leadership guided the nation through its darkest days and inspired hope in the face of adversity. He was a prolific writer and orator, known for his wit, wisdom, and indomitable spirit."
    },
    {
      "a": "Peter Drucker",
      "b": "Peter Drucker (1909-2005) was an Austrian-born American management consultant, educator, and author. Widely regarded as the father of modern management, Drucker made significant contributions to the fields of business management and organizational theory. His insights into effective leadership, innovation, and entrepreneurship have had a profound influence on businesses worldwide. Drucker's emphasis on the importance of adaptability and foresight continues to shape management practices to this day."
    },
    {
      "a": "Albert Einstein",
      "b": "Albert Einstein (1879-1955) was a German-born theoretical physicist and one of the greatest scientific minds in history. He formulated the theory of relativity, which revolutionized our understanding of space, time, and gravity. Beyond his scientific achievements, Einstein was known for his philosophical reflections on life, curiosity, and imagination. His profound insights into the nature of the universe and his advocacy for peace and social justice continue to inspire generations."
    },
    {
      "a": "Theodore Roosevelt",
      "b": "Theodore Roosevelt (1858-1919) was an American statesman, conservationist, and writer. He served as the 26th President of the United States and played a vital role in advancing progressive reforms and expanding the country's influence on the world stage. Roosevelt was a strong advocate for environmental conservation and believed in the power of individuals to make a difference. His charismatic leadership, robust personality, and commitment to public service continue to inspire generations of Americans."
    },
    {
      "a": "Eleanor Roosevelt",
      "b": "Eleanor Roosevelt (1884-1962) was an American diplomat, activist, and writer. She served as the First Lady of the United States from 1933 to 1945 during her husband Franklin D. Roosevelt's presidency. A prominent advocate for human rights, Roosevelt played a significant role in shaping the Universal Declaration of Human Rights. Her dedication to social justice, equality, and women's rights continues to inspire individuals around the world."
    },
    {
      "a": "Mark Zuckerberg",
      "b": "Mark Zuckerberg (born 1984) is an American technology entrepreneur and philanthropist. He co-founded Facebook, the world's largest social networking platform, and served as its CEO. Zuckerberg's innovative vision and relentless pursuit of connecting people have transformed the way we communicate and share information. He is also actively involved in various philanthropic initiatives, aiming to leverage technology for positive social impact."
    },
    {
      "a": "Franklin D. Roosevelt",
      "b": "Franklin D. Roosevelt (1882-1945) was an American statesman and political leader who served as the 32nd President of the United States. Leading the country through the Great Depression and World War II, Roosevelt implemented bold economic and social reforms known as the New Deal. His leadership and optimism inspired a nation, and he remains one of the most influential presidents in American history."
    },
    {
      "a": "Wayne Gretzky",
      "b": "Wayne Gretzky (born 1961) is a Canadian former professional ice hockey player and coach. Widely regarded as the greatest hockey player of all time, Gretzky's records and achievements are unparalleled. He revolutionized the game with his exceptional skill, vision, and understanding of the sport. Beyond his playing career, Gretzky has remained involved in the hockey community, serving as an ambassador for the sport and inspiring future generations of players."
    },
    {
      "a": "Norman Vincent Peale",
      "b": "Norman Vincent Peale (1898-1993) was an American minister, author, and motivational speaker. He is best known for his book 'The Power of Positive Thinking,' which became a worldwide bestseller. Peale's teachings emphasized the importance of optimism, faith, and self-belief in achieving personal success and happiness. He had a profound impact on the self-help and positive psychology movements, inspiring millions to adopt a positive mindset."
    },
    {
      "a": "Mark Twain",
      "b": "Mark Twain (1835-1910), born Samuel Clemens, was an American writer, humorist, and lecturer. He is best known for his novels 'The Adventures of Tom Sawyer' and 'Adventures of Huckleberry Finn,' which are considered literary classics. Twain's wit, satirical social commentary, and memorable characters have made him one of the most beloved and celebrated authors in American literature. His works continue to entertain and enlighten readers of all ages."
    },
    {
      "a": "Sam Levenson",
      "b": "Sam Levenson (1911-1980) was an American humorist, author, and television host. Known for his wit and humorous observations on life, Levenson became popular through his appearances on various TV shows and his books. He had a unique ability to find humor in everyday situations and deliver inspiring messages. Levenson's warmth and relatability endeared him to audiences, making him a beloved figure in the entertainment world."
    },
    {
      "a": "Albert Schweitzer",
      "b": "Albert Schweitzer (1875-1965) was a French-German theologian, philosopher, and physician. He dedicated his life to serving humanity through medical missionary work in Africa. Schweitzer's philosophy of 'Reverence for Life' emphasized the interconnectedness of all living beings and advocated for ethical responsibility towards both humans and animals. He received the Nobel Peace Prize in 1952 for his humanitarian efforts and his contributions to world peace."
    },
    {
      "a": "Frank Sinatra",
      "b": "Frank Sinatra (1915-1998) was an American singer, actor, and producer, regarded as one of the greatest vocalists in the history of popular music. Known as 'The Voice,' Sinatra's rich, velvety tones and captivating performances made him a cultural icon. His influence extended beyond music, as he also achieved success in film and television. Sinatra's charisma, style, and timeless recordings continue to resonate with audiences worldwide."
    },
    {
      "a": "Jordan Belfort",
      "b": "Jordan Belfort (born 1962) is an American author, motivational speaker, and former stockbroker. His memoir, 'The Wolf of Wall Street,' depicts his rise and fall as a wealthy stockbroker and the subsequent legal troubles he faced. Belfort's story has been both criticized and admired for its portrayal of excess, greed, and redemption. He has since become a renowned speaker, sharing his experiences and lessons to inspire others to make positive changes in their lives."
    },
    {
      "a": "Henry David Thoreau",
      "b": "Henry David Thoreau (1817-1862) was an American essayist, poet, and philosopher. He is best known for his book 'Walden,' a reflection on living a simple, deliberate life in harmony with nature. Thoreau's writings on individualism, civil disobedience, and environmental stewardship have influenced generations of thinkers and activists. His commitment to living authentically and his deep connection to the natural world continue to resonate with readers today."
    },
    {
      "a": "John D. Rockefeller",
      "b": "John D. Rockefeller (1839-1937) was an American business magnate and philanthropist. He co-founded the Standard Oil Company, which dominated the oil industry and made him one of the richest individuals in history. Rockefeller's business acumen, strategic thinking, and philanthropic initiatives have had a lasting impact on various sectors, including education, medicine, and scientific research. His legacy as one of America's greatest entrepreneurs and philanthropists endures to this day."
    },
    {
      "a": "Christian D. Larson",
      "b": "Christian D. Larson (1874-1954) was an American author and New Thought leader. His writings focused on the power of positive thinking, self-improvement, and personal development. Larson's works, such as 'The Optimist Creed' and 'The Pathway of Roses,' continue to inspire individuals to embrace optimism, self-belief, and a proactive approach to life. His teachings have had a profound influence on the self-help and personal growth movements."
    },
    {
      "a": "Chris Grosser",
      "b": "Chris Grosser is a contemporary American entrepreneur, speaker, and social media influencer. He is known for his motivational quotes and insights on entrepreneurship, success, and personal growth. Grosser's content, shared through various online platforms, has inspired aspiring entrepreneurs and individuals seeking personal and professional development. Through his work, he aims to empower others to unlock their full potential and achieve their goals."
    },
    {
      "a": "Ralph Waldo Emerson",
      "b": "Ralph Waldo Emerson (1803-1882) was an American essayist, poet, and philosopher. He was a leading figure in the transcendentalist movement, which emphasized individualism, self-reliance, and the spiritual connection between humans and nature. Emerson's writings, including his essay collection 'Self-Reliance' and his poem 'Nature,' have had a profound influence on literature, philosophy, and the concept of American identity. His wisdom and timeless insights continue to inspire individuals to embrace their unique selves."
    },
    {
      "a": "Mahatma Gandhi",
      "b": "Mahatma Gandhi (1869-1948) was an Indian lawyer, anti-colonial nationalist, and political ethicist who led India to independence from British rule. He employed nonviolent civil disobedience as a means to achieve social and political change. Gandhi's philosophy of ahimsa (nonviolence) and satyagraha (truth force) continues to inspire movements for freedom, justice, and equality worldwide. He remains a symbol of peaceful resistance and his teachings promote compassion, inclusivity, and the pursuit of truth."
    },
    {
      "a": "Norman Vaughan",
      "b": "Norman Vaughan (1905-2005) was an American adventurer, dogsled racer, and explorer. He participated in several expeditions to Antarctica, including Admiral Richard Byrd's 1928–1930 expedition. Vaughan's passion for exploration and his determination to push the boundaries of human endurance earned him respect and admiration. His indomitable spirit, love for the outdoors, and commitment to following one's dreams continue to inspire adventurers and explorers around the world."
    },
    {
      "a": "Lao Tzu",
      "b": "Lao Tzu was an ancient Chinese philosopher and writer, believed to have lived in the 6th century BCE. He is traditionally credited as the author of the Tao Te Ching, a fundamental text of Taoism. Lao Tzu's teachings revolved around the concept of Tao, the Way, emphasizing the importance of harmony, simplicity, and living in accordance with the natural flow of the universe. His philosophical insights have influenced not only Taoism but also various aspects of Chinese culture and spirituality."
    },
    {
      "a": "Chinese Proverb",
      "b": "Chinese Proverbs encompass a wide range of wisdom and reflections on life, relationships, and human nature. Rooted in Chinese culture and history, these proverbs have been passed down through generations, offering insights and guidance to navigate various aspects of life. They encapsulate the collective wisdom and values of Chinese society, promoting virtues such as harmony, perseverance, and moral integrity."
    },
    {
      "a": "Ralph Waldo Emerson",
      "b": "Ralph Waldo Emerson (1803-1882) was an American essayist, poet, and philosopher. He was a leading figure in the transcendentalist movement, which emphasized individualism, self-reliance, and the spiritual connection between humans and nature. Emerson's writings, including his essay collection 'Self-Reliance' and his poem 'Nature,' have had a profound influence on literature, philosophy, and the concept of American identity. His wisdom and timeless insights continue to inspire individuals to embrace their unique selves."
    },
    {
      "a": "Charles R. Swindoll",
      "b": "Charles R. Swindoll (born 1934) is an evangelical Christian pastor, author, and educator. He has written numerous books on Christian living, leadership, and personal development. Swindoll's teachings emphasize the power of attitude, perseverance, and faith in overcoming challenges and living a purposeful life. Through his ministry, he has inspired individuals to grow spiritually, develop character, and make a positive impact on the world."
    },
    {
      "a": "Anonymous",
      "b": "Anonymous refers to an unknown or unspecified author of a quote or saying. Anonymous quotes often carry a universal message or wisdom that transcends individual identity. These quotes can inspire and resonate with people from all walks of life, leaving room for interpretation and personal reflection. Though their authorship may be unknown, the words themselves can have a profound impact on readers."
    },
    {
      "a": "David Brinkley",
      "b": "David Brinkley (1920-2003) was an American newscaster, television journalist, and author. He was one of the most prominent television news personalities in the United States. Brinkley's insightful reporting and eloquent commentary made him a trusted voice in journalism. His career spanned several decades, during which he covered major historical events and interviewed influential figures. Brinkley's contributions to broadcast journalism have left a lasting impact on the field."
    }
    // ... Additional author bio snippets for the remaining quotes
  ]

function getQuotes(){
    return quotes;
}
function getQuotesByAuthor(author){
    return quotes.filter(quote =>{
        return quote.a === author;
    })
}
function getBio(author){
    return bios.find(bio =>{
        return bio.a === author;
    })
}

export default { getQuotes, getQuotesByAuthor, getBio }