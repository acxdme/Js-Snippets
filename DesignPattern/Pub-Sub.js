// PubSub implementation

class PubSub {

    constructor() {

        this.topics = {}; // Dictionary to store topics and their subscribers

    }

    // Method to subscribe to a topic
    subscribe(topic, subscriber) {
        if (!this.topics[topic]) {
            this.topics[topic] = [];
        }
        this.topics[topic].push(subscriber);
    }

    // Method to unsubscribe from a topic
    unsubscribe(topic, subscriber) {
        if (this.topics[topic]) {
            this.topics[topic] = this.topics[topic].filter(sub => sub !== subscriber);
        }
    }

    // Method to publish a message to a topic
    publish(topic, message) {
        if (this.topics[topic]) {
            this.topics[topic].forEach(subscriber => subscriber(message));
        }
    }
}

// Example usage:
const pubSub = new PubSub();

// Subscriber 1
const subscriber1 = message => {
    console.log('Subscriber 1 received message:', message);
};

// Subscriber 2
const subscriber2 = message => {
    console.log('Subscriber 2 received message:', message);
};

pubSub.subscribe('news', subscriber2);

// Publish a message to the 'news' topic
pubSub.publish('news', 'Breaking news: New JavaScript framework released!');

/**

The Publish-Subscribe (Pub-Sub) pattern in JavaScript is a messaging pattern where components (or modules) can 
communicate with each other in a decoupled way.

How it works:

	1.	Publishers: These are the components or modules that generate or send messages (events).
      They don’t need to know who will receive the messages.
	2.	Subscribers: These are the components or modules that are interested in certain types of messages (events).
      They “subscribe” to specific events and get notified when an event is published.

Key Concepts:

	•	Decoupling: The publisher doesn’t know which modules are subscribed,
      and the subscribers don’t know where the events are coming from. This decoupling allows flexibility and scalability in applications.
	•	Events: The messages or data that are published by the publisher and consumed by subscribers.

 
In the publisher - subscriber pattern, senders of messages, called publishers, do not program the

messages to be sent directly to specific receivers, called subscribers.

This means that the publisher and subscriber don’t know about the existence of one another.

There is a third component, called broker, message broker or event bus, which is known by both

the publisher and subscriber.It filters all incoming messages and distributes them accordingly.

● In the observer pattern, the observers are aware of the Subject.The Subject maintains a

record of the Observers.Whereas, in publisher - subscriber, publishers and subscribers

don’t need to know each other.They simply communicate with the help of message

queues or a broker.

● In the publisher - subscriber pattern, components are loosely coupled as opposed to the

observer pattern.

● The observer pattern is mostly implemented synchronously, i.e.the Subject calls the

appropriate method of all its observers when an event occurs.The publisher - subscriber

pattern is mostly implemented asynchronously(using a message queue).

● The observer pattern needs to be implemented in a single - application address space.

On the other hand, the publisher - subscriber pattern is more of a cross - application

pattern.
    // Subscribe subscribers to a topic

    pubSub.subscribe('news', subscriber1);
**/
