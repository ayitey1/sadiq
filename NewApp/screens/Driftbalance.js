import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Driftbalance = () => {
  return (
    <SafeAreaView>
      <Text>What is Drift balance?
Drift balance is an in-app virtual payment method to pay for Drift products.

How do I top up my Drift balance?
Unfortunately, you can’t currently top up Drift balance in your location if you have a zero or positive balance. But we’re working on it!

If you have a negative balance, you can use iDeal, Bancontact, Paypal, and debit or credit cards, including MasterCard, Visa, American Express, Diners Club, M-Pesa, and JCB to settle your balance.

In addition, your Drift balance can be topped up via refunds from Drift.

How do I use it?
Your Drift balance automatically applies to your order. We’ll use another payment method to cover the remaining cost if your balance hits zero.

Frequently asked questions
Why is my balance negative?
Your Drift balance might be negative if your
</Text>
    </SafeAreaView>
  )
}

export default Driftbalance

const styles = StyleSheet.create({})