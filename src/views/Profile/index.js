import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DataStore, Auth } from "aws-amplify";
import { useAuthContext } from "../../Contexts/AuthContext";
import { User } from "../../models";

export default function Profile() {
  const [name, setName] = useState(dbUser?.name || "");
  const [address, setAddress] = useState(dbUser?.address || "");
  const [lat, setLat] = useState(dbUser?.lat  || "0");
  const [lng, setLng] = useState(dbUser?.lng   || "0");
  const { sub, setDbUser, dbUser } = useAuthContext();
  const onSave = async () => {
    if(dbUser){
      await updateUser();
    }else{
      await createUser();
    }
  };
  const createUser = async () => {
    try {
      const user = await DataStore.save(
        new User({
          name,
          address,
          lat: parseFloat(lat),
          lng: parseFloat(lng),
          sub,
        })
      );
      setDbUser(user);
      console.warn(user);
    } catch (e) {
      Alert.alert("Error", e.message);
    }
  }
  const updateUser = async () => {
    const user = await DataStore.save(User.copyOf(dbUser, (update)=>{
      update.name = name,
      update.address = address,
      update.lat = parseFloat(lat),
      update.lng = parseFloat(lng)
    }))
    setDbUser(user)
  }

  return (
    <SafeAreaView>
      <Text style={styles.title}>Profile</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
        style={styles.input}
      />
      <TextInput
        value={lat}
        onChangeText={setLat}
        placeholder="Latitude"
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        value={lng}
        onChangeText={setLng}
        placeholder="Longitude"
        style={styles.input}
      />
      <TouchableOpacity style={styles.btn} activeOpacity={0.7} onPress={onSave}>
        <Text style={styles.btn_text}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Auth.signOut()}
        style={styles.btn}
        activeOpacity={0.7}
      >
        <Text style={styles.btn_text}>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  input: {
    margin: 10,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
  },
  btn: {
    padding: 15,
    backgroundColor: "#000",
    margin: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  btn_text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  // signOut_btn:{
  //   padding:15,
  //   backgroundColor:'#000',
  //   margin:10,
  //   marginLeft:10,
  //   marginRight:10,
  //   borderRadius:5
  // },
  // signOut_text:{
  //   color:'#fff',
  //   fontSize:18,
  //   fontWeight:'700',
  //   textAlign:'center'
  // }
});
