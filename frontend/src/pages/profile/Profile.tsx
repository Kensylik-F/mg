import '../../style/pageStyle.css';
import { useTelegram } from '../../hooks/useTelegram';

export const Profile = () =>{
      const {user} = useTelegram();
    
    return (
        <section className="Section">
            <div className="PageCenter">
                <div style={{width:'100%'}}>
                    <div style={{display:'flex', gap:'30px'}}>
                        <div style={{height:'100px', width:'100px', borderRadius:'100%', background:'#e3e4e4', display:'flex', justifyContent:'center', alignItems:'center', fontSize:'50px'}}>
                            <img src={`${user?.photo_url}`} alt="user" />
                        </div>
                        <div style={{display:'flex', justifyContent:'center', flexDirection:'column',alignItems:'self-start'}}>
                            <div>
                                <h1>
                                    {user?.first_name}
                                </h1>
                                <h1>
                                    {user?.last_name}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
}