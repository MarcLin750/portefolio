import React, { useState, useEffect } from 'react';
import '../styles/veilles.css'

interface FeedItem {
    title: string;
    link: string;
    pubDate: string; // Added for publication date
    image: string;
}

const Veilles = () => {
    const [feedItems, setFeedItems] = useState<FeedItem[]>([]);

    useEffect(() => {
        const fetchRSSFeed = async () => {
            try {
                const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://developer.mozilla.org/en-US/blog/rss.xml'));
                const data = await response.json();
                const parser = new DOMParser();
                const feedData = parser.parseFromString(data.contents, "text/xml");
                
                const items = feedData.querySelectorAll('item');
                const fetchedItems: FeedItem[] = Array.from(items).map(item => {
                    let imageUrl = '';
                    const enclosure = item.querySelector('enclosure');
                    if (enclosure && enclosure.getAttribute('type')?.startsWith('image/')) {
                        imageUrl = enclosure.getAttribute('url') || '';
                    } else {
                        // Fallback to description if enclosure tag isn't present or doesn't contain an image
                        const content = item.querySelector('description')?.textContent || '';
                        const imgMatch = content.match(/<img[^>]+src="([^">]+)"/i);
                        if (imgMatch) {
                            imageUrl = imgMatch[1];
                        }
                    }
    
                    // Extract the publication date
                    const pubDate = item.querySelector('pubDate')?.textContent || '';
    
                    return {
                        title: item.querySelector('title')?.textContent || '',
                        link: item.querySelector('link')?.textContent || '',
                        pubDate,
                        image: imageUrl,
                    };
                });
                
                setFeedItems(fetchedItems);
            } catch (error) {
                console.error("Error fetching RSS feed: ", error);
            }
        };
    
        fetchRSSFeed();
    }, []);    

    return (
        <div className="container veilles">
            <div className="row">
                {feedItems.map((item, index) => (
                    <div key={index} className="col-sm-6 col-lg-4 mb-4">
                        <div className="card">
                            {item.image && <img src={item.image} className="card-img-top" alt={item.title} />}
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{new Date(item.pubDate).toLocaleDateString()}</p>
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Veilles;
