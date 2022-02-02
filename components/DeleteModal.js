import React, { Fragment, useRef, useState } from 'react';
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { Dialog, Transition } from "@headlessui/react";
import { CameraIcon } from '@heroicons/react/outline';
import { db, storage } from "../firebase";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { ref, getDownloadURL, uploadString } from "@firebase/storage";

function DeleteModal() {
  return (
  
    <div></div>
    
  );
}

export default DeleteModal;
