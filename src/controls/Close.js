// @flow
import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

const HIT_SLOP = {top: 15, left: 15, right: 15, bottom: 15};

const styles = StyleSheet.create({
    closeButton: {
        alignSelf: 'flex-start',
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginLeft: 15,
    },
    image: {
        width: 30,
        height: 30
    }
});

export default ({onPress}: {onPress: () => *}) => (
    <TouchableOpacity
        hitSlop={HIT_SLOP}
        style={styles.closeButton}
        onPress={onPress}
    >
        <Image
          style={styles.image}
          source={require('./close.png')}
        />
    </TouchableOpacity>
);
