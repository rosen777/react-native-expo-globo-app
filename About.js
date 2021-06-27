import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import imageA from './assets/home-image-2.jpg';
import imageB from './assets/our-story-image-2.jpg';
import imageC from './assets/our-story-image-3.jpg';

const blockA = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`;

const blockB = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`;

export default function AboutGlobo() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image source={imageA} style={{ width: "100%", height: 300 }} />
          <Text style={styles.heading}>We Are Different</Text>
          <Text style={styles.text}>{blockA}</Text>
          <Image source={imageB} style={{ width: "100%", height: 300 }} />
          <Text style={styles.heading}>Leaders in our field</Text>
          <Text style={styles.text}>{blockB}</Text>
          <Image source={imageC} style={{ width: "100%", height: 400 }} />
          <Text style={styles.heading}>We are the Experts</Text>
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    heading: {
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
        paddingTop: 5,
    },
    text: {
        fontFamily: 'OpenSans',
    }
});