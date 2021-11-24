import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput, ScrollView, Alert } from 'react-native';
import CustumButton from './componants/CustumButton';

const App = () => {
  const [tomail, setto] = useState("");
  const [sub, setsub] = useState("");
  const [mymessage, setmsg] = useState("");

  function Sendmail() {

    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey('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');

    const msg = {
      to: tomail,// Change to your recipient
      from: "dhk7283013741@gmail.com", // Change to your verified sender
      subject: sub,
      text: mymessage,
    };
    sgMail
      .send(msg)
      .then(() => {
        Alert.alert("Email Sent ");
      })
      .catch((error) => {
        Alert.alert("Something went wrong ");
      })
    setto("");
    setsub("");
    setmsg("");

  }
  return (
    <View style={styles.screen}>
      <StatusBar barStyle='light-content' backgroundColor="#080726" />
      <View style={styles.header}><Text style={styles.headerText}>Send Email</Text></View>
      <ScrollView>
        <View style={styles.inputcontainer}>
          <Text style={styles.inputtxt}>To</Text>
          <TextInput placeholder="Enter Email"
            style={styles.input} onChangeText={setto} value={tomail} />
          <Text style={styles.inputtxt}>Subject</Text>
          <TextInput placeholder="Enter Subject"
            style={styles.input} onChangeText={setsub} value={sub} />
          <Text style={styles.inputtxt}>Your Message</Text>
          <TextInput style={styles.msg} multiline={true}
            onChangeText={setmsg}
            placeholder='Max 150 latters'
            numberOfLines={8}
            maxLength={150}
            value={mymessage} />
          <CustumButton
            title="Send"
            style={styles.btn}
            textstyle={styles.btntxt}
            onPress={() => {
              if (tomail === "") {
                Alert.alert("Enter Recipient");
              }
              else {
                if (sub === "") {
                  Alert.alert("Enter Subject");
                }
                else {
                  if (mymessage === "") {
                    Alert.alert("Enter Message");
                  }
                  else {
                    Sendmail();
                  }
                }
              }

            }}
          />
        </View>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#080726'
  },
  header: {
    backgroundColor: '#19bf9e',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: '#080726',
    fontSize: 22,
    fontWeight: 'bold'
  },
  inputcontainer: {
    marginHorizontal: 20,
  },
  from: {
    backgroundColor: 'white',
    borderRadius: 7,
    fontSize: 20,
    height: 45,
    alignItems: 'center',
    paddingStart: 10,
    paddingTop: 5


  },
  input: {
    backgroundColor: 'white',
    borderRadius: 7,
    fontSize: 20,
    height: 45
  },
  msg: {
    backgroundColor: 'white',
    borderRadius: 7,
    fontSize: 20,
    height: 250,
    paddingRight: 10,
    lineHeight: 23,
    textAlignVertical: 'top'

  },
  inputtxt: {
    color: 'white',
    marginBottom: 10,
    fontSize: 20
  },
  btn: {
    width: '38%',
    height: 50,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20
  },
  btntxt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#080726'
  }
});
export default App;