import React, { useState, useEffect } from 'react';
import '../styles/veilles.css';

interface FeedItem {
    title: string;
    link: string;
    pubDate: string;
    image: string;
}

const Veilles = () => {
    const [feedItems, setFeedItems] = useState<FeedItem[]>([]);
    const [loading, setLoading] = useState(true);

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
                        const content = item.querySelector('description')?.textContent || '';
                        const imgMatch = content.match(/<img[^>]+src="([^">]+)"/i);
                        if (imgMatch) {
                            imageUrl = imgMatch[1];
                        }
                    }

                    const pubDate = item.querySelector('pubDate')?.textContent || '';

                    return {
                        title: item.querySelector('title')?.textContent || '',
                        link: item.querySelector('link')?.textContent || '',
                        pubDate,
                        image: imageUrl,
                    };
                });

                setFeedItems(fetchedItems);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching RSS feed: ", error);
                setLoading(false);
            }
        };
        fetchRSSFeed();
    }, []);

    return (
        <div className="container veilles">
            {loading ? (
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Chargement...</span>
                        </div>
                        <p className="mt-3">La page "veilles" est en cours chargement...</p>
                    </div>
                </div>
            ) : (
                <div>
                    <div className='section border-bottom mb-4'>
                        <h2>Définition d'une Veille Technologique:</h2>
                        <p>
                            La veille technologique ou veille scientifique et technique, c'est le fait de garder 
                            un œil sur les nouvelles tendances, les innovations et les développements dans le 
                            domaine de l'informatique. Cela implique de collecter, d'analyser et d'interpréter 
                            les informations pertinentes pour rester à jour et anticiper les évolutions futures. 
                            En bref, c'est être un explorateur numérique, toujours en quête de nouvelles connaissances 
                            pour rester à la pointe de la technologie.
                        </p>
                        <h2>Ma Veille Technologique: <strong>Mozdila MDZ</strong></h2>
                        <p>
                            En tant que développeur, mon choix de suivre la veille sur le blog de Mozdila MDZ s'explique 
                            par la pertinence et la fréquence des publications de ce blog, notamment en ce qui concerne les 
                            langages informatiques. Il est important de rester informé des dernières avancées dans le 
                            domaine de la programmation et des langages informatiques, en raison de l'évolution 
                            constante de la technologie.
                        </p>
                        <p>
                           
                        </p>
                    </div>
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
            )}
        </div>
    );
}

export default Veilles;
