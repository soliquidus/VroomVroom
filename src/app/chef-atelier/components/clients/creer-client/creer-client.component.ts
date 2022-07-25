import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/shared/models/client';
@Component({
  selector: 'app-creer-client',
  templateUrl: './creer-client.component.html',
  styleUrls: ['./creer-client.component.scss']
})
export class CreerClientComponent implements OnInit {

  client!: Client;
  vForm!: FormGroup;



  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.initForm();

  }

  initForm() {

    this.vForm = this.formBuilder.group({

      nomControl: new FormControl('', [Validators.required]),

      prenomControl: new FormControl('', [Validators.required]),

      emailControl: new FormControl('', [
        Validators.required,
        Validators.minLength(4)]),

      telephoneControl: new FormControl('',
        [Validators.required,
        Validators.maxLength(10),
        ]
      ),

      mobileControl: new FormControl('',
        [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
        ]
      ),
      adresseControl: new FormControl('',
        [Validators.required,
        Validators.minLength(3)
        ]
      ),
      codePostalControl: new FormControl('',
        [Validators.required,
        Validators.minLength(4),
        Validators.maxLength(5)
        ]
      ),
      villeControl: new FormControl('',
        [Validators.required,
        Validators.minLength(2)
        ]
      )
    });
  }



  get nomControl() { return this.vForm.get('nomControl'); }

  get prenomControl() { return this.vForm.get('nomControl'); }

  get emailControl() { return this.vForm.get('emailControl'); }

  get telephoneControl() { return this.vForm.get('telephoneControl'); }

  get mobileControl() { return this.vForm.get('mobileControl'); }

  get adresseControl() { return this.vForm.get('adresseControl'); }

  get codePostalControl() { return this.vForm.get('codePostalControl'); }

  get villeControl() { return this.vForm.get('villeControl'); }



  onSubmit(): void {

    this.client = new Client();

    this.client.nom = this.nomControl?.value;
    this.client.prenom = this.prenomControl?.value;
    this.client.email = this.emailControl?.value;
    this.client.telephone = this.telephoneControl?.value;
    this.client.mobile = this.mobileControl?.value;
    this.client.adresse = this.adresseControl?.value;
    this.client.codePostal = this.codePostalControl?.value;
    this.client.ville = this.villeControl?.value;
  }



}
