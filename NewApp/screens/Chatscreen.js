import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';

const renderBubble = (props) => {
  const { currentMessage } = props;

  if (currentMessage.buttons) {
    return (
      <View style={{ padding: 10, backgroundColor: '#e6e6e6', borderRadius: 10 }}>
        {currentMessage.buttons.map((button) => (
          <TouchableOpacity
            key={button._id}
            onPress={() => props.onButtonPress(button.text)}
            style={{
              marginVertical: 5,
              padding: 10,
              backgroundColor: '#FFFFFF',
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#1C05B3',
            }}
          >
            <Text style={{ color: '#1C05B3', textAlign: 'center' }}>{button.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  return <Bubble {...props} />;
};

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello! How can I assist you today?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Chatbot',
          avatar: 'https://placeimg.com/140/140/any',
        },
        buttons: [
          { _id: '1', text: 'Tell me more about your services.' },
          { _id: '2', text: 'I need help with my account.' },
        ],
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));

    const userMessage = messages[0].text.toLowerCase();

    if (userMessage !== '') {
      let options;
      if (userMessage === 'i need help with my account') {
        options = [
          {
            _id: Math.random().toString(36).substring(7),
            text: 'How do I reset my password?',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Chatbot',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
          {
            _id: Math.random().toString(36).substring(7),
            text: 'How do I update my profile?',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Chatbot',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
        ];
      } else {
        options = [
          {
            _id: Math.random().toString(36).substring(7),
            text: 'Tell me more about your services.',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Chatbot',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
          {
            _id: Math.random().toString(36).substring(7),
            text: 'I need help with my account.',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Chatbot',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
        ];
      }

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, {
          _id: Math.random().toString(36).substring(7),
          text: '',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Chatbot',
            avatar: 'https://placeimg.com/140/140/any',
          },
          buttons: options.map((option) => ({ _id: Math.random().toString(36).substring(7), text: option.text })),
        })
      );
    } else {
      axios
        .post('http://<your-server-ip>:3000/message', { message: userMessage })
        .then((response) => {
          const botMessage = {
            _id: Math.random().toString(36).substring(7),
            text: response.data.message,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Chatbot',
              avatar: 'https://placeimg.com/140/140/any',
            },
          };
          setMessages((previousMessages) => GiftedChat.append(previousMessages, botMessage));
        })
        .catch((error) => {
          console.error('Error sending message to backend:', error);
        });
    }
  }, []);

  const handleButtonPress = useCallback((buttonText) => {
    const newMessage = {
      _id: Math.random().toString(36).substring(7),
      text: buttonText,
      createdAt: new Date(),
      user: {
        _id: 1,
      },
    };
    onSend([newMessage]);
  }, [onSend]);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{ _id: 1 }}
      renderBubble={(props) => renderBubble({ ...props, onButtonPress: handleButtonPress })}
      renderInputToolbar={() => null} // Hides the input toolbar
    />
  );
}
