import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      auther: '',
      storyText: '',
    };
  }
  render() {
    return (
      <View>
        <Header
          backgroundColor={'cyan'}
          centerComponent={{
            text: 'Story Hub',
            style: { color: 'lime', fontSize: 30 },
          }}
        />
        <TextInput
          placeholder="story title"
          onChangeText={(text) => {
            this.setState({
              title: text,
            });
          }}
          value={this.state.title}
          placeholderTextColor="black"
          style = {styles.title}
        />

        <TextInput
          placeholder="author"
          onChangeText={(text) => {
            this.setState({
              auther: text,
            });
          }}
          value={this.state.author}
          placeholderTextColor="black"
          style = {styles.author}
        />

        <TextInput
          placeholder="story text"
          onChangeText={(text) => {
            this.setState({
              storyText: text,
            });
          }}
          value={this.state.storyText}
          placeholderTextColor="black"
          style = {styles.storyText}
        />

        <TouchableOpacity
          style={{ justifyContent: 'center', width: 80, height: 40 }}>
          <Text style={{ textAlign: 'center' }}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    height: 40,
    margin: 10,
    marginTop: 50,
    padding: 5,
  },
  author: {
    height: 40,
    margin:10,
    padding: 5,
  },
  storyText: {
    height: 250,
    margin: 10,
    padding: 5,
  }
})



