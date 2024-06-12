import {React, useState} from 'react';
import './toggleButton.css';

export default function ToggleButton() {
      const [on, setOnState] = useState(false);
      const toggle = () => setOnState(o => !o);
      return (
        <button class={on ? 'on' : 'off'} on={on} onClick={toggle}>
          <span class="pin" />
        </button>
      );
    }
