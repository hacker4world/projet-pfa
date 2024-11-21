const crypto = require("crypto");
const fs = require("fs");

// Generate RSA key pair
crypto.generateKeyPair(
  "rsa",
  {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: "spki", // Recommended for RSA public key
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8", // Recommended for RSA private key
      format: "pem",
    },
  },
  (err, publicKey, privateKey) => {
    if (err) {
      console.error("Error generating key pair:", err);
      return;
    }

    // Save the keys to files
    fs.writeFileSync("jwt.key", privateKey);

    console.log("Keys generated successfully.");
  }
);
