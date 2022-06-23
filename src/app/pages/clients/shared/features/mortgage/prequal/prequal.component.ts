import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { ContactService } from '../../../../../../@core/backend/common/services/contact.service';
import { getNullableDataValue, getNullableDateValue } from '../../../../../../@core/utils/helpers';

@Component({
    selector: 'ngx-prequal',
    templateUrl: './prequal.component.html',
    styleUrls: ['./prequal.component.scss'],
})
export class PrequalComponent implements OnInit {
    accountName: '';
    form: FormGroup;
    @Input() service: ContactService;
    @Input() data: Observable<any>;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.form = this.initForm(this.fb);
        this.loadAccountTestData(this.form);
    }

    loadAccountTestData(form: FormGroup) {
        const data = {
            estPropV: 'est Prop Value',
            occup: 'Occupancy',
            propType: 'propType',
            originalP: 'Orginal Price',
            retention: 'Retention',
            lastRefiDate: 'Last Refi Date',
            notes: 'Notes',
            firstLien: '1st lien',
            firstLien2: 'Payment',
            firstLien3: 'Rate',
            loanType1: 'Loan Type',
            lender1: 'Lender',
            secondLien: '2nd Lien',
            secondLien2: 'Payment',
            secondLien3: 'Rate',
            loanType2: 'loanType',
            lender2: 'Lender',
            thirdLien: '3rd Lien',
            thirdLien2: 'Payment',
            thirdLien3: 'Rate',
            loanType3: 'Loan Type',
            lender3: 'Lender',
            cashout4: 'Cash Out',
            taxes: 'taxes',
            ccMisc: 'CC-Misc',
            insurHOA: 'insurance HOA',
            pmiMi: 'PMI-MI',
            floodInsur: 'Flood Insurance',
            creditReport: 'Credit Report #',
            lastrepDate: new Date,
            total1: 'Total',
            socialS: 'Social Sec. #',
            socialS2: 'Social Sec. #',
            birthDate: '00/00/00',
            birthDate2: '00/00/00',
            midScore: 'Mis Score',
            midScore2: 'Mid Score',
            income: 'Income',
            income2: 'Income',
            debt: 'Debt',
            debt2: 'Debt',
            ppValue: 'P,p / Value',
            pi: 'PI',
            downPMT: 'Down Payment',
            tx: 'TX',
            loanAmt: 'Loan Amount',
            ins: 'ins',
            mipFF: 'MIP/FF',
            mi: 'MI',
            totLoan: 'Total Loan',
            piti: 'PITI',
            rate: 'Rate',
            dti: 'DTI',
            term: 'Term',
            ltv: 'LTV',
            rate2: 'Rate',
            lastrepDate2: new Date,
            loanType4: 'Loan Type',
            lender4: 'Lender',
            loanProg: 'Loan Program',
            lender5: 'Lender',
            loanProgram: 'loanProgram',
            ppValue2: 'PP / Value',
            loanAmount: 'Loan Amount',
            intRate: 'Interest Rate',
            intRate2: 'Interest Rate 2',
            lienType: 'Lien Type',
            occup2: 'Occupancy',
            propType2: 'Property Type',
            imp: 'Impounds',
            docType: 'Doc Type',
        };
        this.setFormValues(form, data);
    }

    initForm(fb: FormBuilder): FormGroup {

        const form = fb.group({
            estPropV: fb.control(''),
            occup: fb.control(''),
            propType: fb.control(''),
            originalP: fb.control(''),
            retention: fb.control(''),
            lastRefiDate: fb.control(''),
            notes: fb.control(''),
            firstLien: fb.control(''),
            firstLien2: fb.control(''),
            firstLien3: fb.control(''),
            loanType1: fb.control(''),
            lender1: fb.control(''),
            lender3: fb.control(''),

            secondLien: fb.control(''),
            secondLien2: fb.control(''),
            secondLien3: fb.control(''),
            loanType2: fb.control(''),
            lender2: fb.control(''),
            thirdLien: fb.control(''),
            thirdLien2: fb.control(''),
            thirdLien3: fb.control(''),
            loanType3: fb.control(''),
            cashout4: fb.control(''),
            taxes: fb.control(''),
            ccMisc: fb.control(''),
            insurHOA: fb.control(''),
            pmiMi: fb.control(''),
            floodInsur: fb.control(''),
            creditReport: fb.control(''),
            lastrepDate: fb.control(''),
            total1: fb.control(''),
            socialS: fb.control(''),
            socialS2: fb.control(''),
            birthDate: fb.control(''),
            birthDate2: fb.control(''),
            midScore: fb.control(''),
            midScore2: fb.control(''),
            income: fb.control(''),
            income2: fb.control(''),
            debt: fb.control(''),
            debt2: fb.control(''),
            ppValue: fb.control(''),
            pi: fb.control(''),
            downPMT: fb.control(''),
            tx: fb.control(''),
            loanAmt: fb.control(''),
            ins: fb.control(''),
            mipFF: fb.control(''),
            mi: fb.control(''),
            totLoan: fb.control(''),
            piti: fb.control(''),
            rate: fb.control(''),
            dti: fb.control(''),
            term: fb.control(''),
            ltv: fb.control(''),
            rate2: fb.control(''),
            lastrepDate2: fb.control(''),
            loanType4: fb.control(''),
            lender4: fb.control(''),
            loanProg: fb.control(''),
            lender5: fb.control(''),
            loanProgram: fb.control(''),
            ppValue2: fb.control(''),
            loanAmount: fb.control(''),
            intRate: fb.control(''),
            intRate2: fb.control(''),
            lienType: fb.control(''),
            occup2: fb.control(''),
            propType2: fb.control(''),
            imp: fb.control(''),
            docType: fb.control(''),
        }, { updateOn: 'blur' });
        return form;
    }

    setFormValues(form: FormGroup, data: any) {
        form.setValue({

            occup: getNullableDataValue(data.occup, ''),
            estPropV: getNullableDataValue(data.estPropV, ''),
            propType: getNullableDataValue(data.propType, ''),
            originalP: getNullableDataValue(data.originalP, ''),
            retention: getNullableDataValue(data.retention, ''),
            lastRefiDate: getNullableDataValue(data.lastRefiDate, ''),
            notes: getNullableDataValue(data.notes, ''),
            firstLien: getNullableDataValue(data.firstLien, ''),
            firstLien2: getNullableDataValue(data.firstLien2, ''),
            firstLien3: getNullableDataValue(data.firstLien3, ''),
            loanType1: getNullableDataValue(data.loanType1, ''),
            lender1: getNullableDataValue(data.lender1, ''),
            secondLien: getNullableDataValue(data.secondLien, ''),
            secondLien2: getNullableDataValue(data.secondLien2, ''),
            secondLien3: getNullableDataValue(data.secondLien3, ''),
            loanType2: getNullableDataValue(data.loanType2, ''),
            lender2: getNullableDataValue(data.lender2, ''),
            thirdLien: getNullableDataValue(data.thirdLien, ''),
            thirdLien2: getNullableDataValue(data.thirdLien2, ''),
            thirdLien3: getNullableDataValue(data.thirdLien3, ''),
            loanType3: getNullableDataValue(data.loanType3, ''),
            lender3: getNullableDataValue(data.lender3, ''),
            cashout4: getNullableDataValue(data.cashout4, ''),
            taxes: getNullableDataValue(data.taxes, ''),
            ccMisc: getNullableDataValue(data.ccMisc, ''),
            insurHOA: getNullableDataValue(data.insurHOA, ''),
            pmiMi: getNullableDataValue(data.pmiMi, ''),
            floodInsur: getNullableDataValue(data.floodInsur, ''),
            creditReport: getNullableDataValue(data.creditReport, ''),
            lastrepDate: getNullableDateValue(data.lastrepDate, ''),
            total1: getNullableDataValue(data.total1, ''),
            socialS: getNullableDataValue(data.socialS, ''),
            socialS2: getNullableDataValue(data.socialS2, ''),
            birthDate: getNullableDataValue(data.birthDate, ''),
            birthDate2: getNullableDataValue(data.birthDate2, ''),
            midScore: getNullableDataValue(data.midScore, ''),
            midScore2: getNullableDataValue(data.midScore2, ''),
            income: getNullableDataValue(data.income, ''),
            income2: getNullableDataValue(data.income2, ''),
            debt: getNullableDataValue(data.debt, ''),
            debt2: getNullableDataValue(data.debt2, ''),
            ppValue: getNullableDataValue(data.ppValue, ''),
            pi: getNullableDataValue(data.pi, ''),
            downPMT: getNullableDataValue(data.downPMT, ''),
            tx: getNullableDataValue(data.tx, ''),
            loanAmt: getNullableDataValue(data.loanAMT, ''),
            ins: getNullableDataValue(data.ins, ''),
            mipFF: getNullableDataValue(data.mipFF, ''),
            mi: getNullableDataValue(data.mi, ''),
            totLoan: getNullableDataValue(data.totLoan, ''),
            piti: getNullableDataValue(data.piti, ''),
            rate: getNullableDataValue(data.rate, ''),
            dti: getNullableDataValue(data.dti, ''),
            term: getNullableDataValue(data.term, ''),
            ltv: getNullableDataValue(data.ltv, ''),
            rate2: getNullableDataValue(data.rate2, ''),
            lastrepDate2: getNullableDataValue(data.lastrepDate2, ''),
            loanType4: getNullableDataValue(data.loanType4, ''),
            lender4: getNullableDataValue(data.lender4, ''),
            loanProg: getNullableDataValue(data.loanProg, ''),
            lender5: getNullableDataValue(data.lender5, ''),
            loanProgram: getNullableDataValue(data.loanProgram, ''),
            ppValue2: getNullableDataValue(data.ppValue2, ''),
            loanAmount: getNullableDataValue(data.loanAmount, ''),
            intRate: getNullableDataValue(data.intRate, ''),
            intRate2: getNullableDataValue(data.intRate2, ''),
            lienType: getNullableDataValue(data.lienType, ''),
            occup2: getNullableDataValue(data.occup2, ''),
            propType2: getNullableDataValue(data.propType2, ''),
            imp: getNullableDataValue(data.imp, ''),
            docType: getNullableDataValue(data.docType, ''),
        });
    }
}
